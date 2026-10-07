import { redirect } from "next/navigation";
import { isAdmin } from "@/app/lib/adminAuth";
import { getSupabaseAdmin } from "@/app/lib/server";
import { PAYMENT_DEADLINE_HOURS } from "@/app/lib/pricing";
import { rugsData } from "@/data/products";
import AdminOrders, { type AdminOrder, type OrderStatus } from "@/components/AdminOrders";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Orders | Admin",
  robots: { index: false, follow: false },
};

// Défini hors du composant : calcul fait sur le serveur à chaque affichage
function isOverdue(createdAt: string) {
  return Date.now() - new Date(createdAt).getTime() > PAYMENT_DEADLINE_HOURS * 3600 * 1000;
}

// Priorité d'affichage quand les lignes d'une même commande n'ont pas toutes le même statut
const PRIORITY: OrderStatus[] = ["shipped", "paid", "pending", "cancelled", "expired"];

export default async function AdminOrdersPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return <p className="p-10 text-sm text-red-700">Server configuration error: Supabase keys are missing.</p>;
  }

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    return <p className="p-10 text-sm text-red-700">Could not load orders: {error.message}</p>;
  }

  const map = new Map<string, AdminOrder & { statuses: OrderStatus[] }>();

  for (const r of data ?? []) {
    let order = map.get(r.order_number);
    if (!order) {
      order = {
        orderNumber: r.order_number,
        status: r.status,
        statuses: [],
        overdue: false,
        createdAt: r.created_at,
        paidAt: r.paid_at,
        trackingNumber: r.tracking_number,
        currency: r.currency,
        total: 0,
        customer: {
          name: r.full_name,
          email: r.email,
          phone: r.phone,
          address: r.address,
          city: r.city,
          postalCode: r.postal_code ?? "",
          country: r.country,
          notes: r.notes ?? "",
        },
        items: [],
      };
      map.set(r.order_number, order);
    }
    order.statuses.push(r.status);
    order.total += Number(r.total);
    order.items.push({
      rugName: r.rug_name,
      sku: r.sku,
      size: r.size,
      price: Number(r.price),
      // Photo enregistrée, sinon photo du catalogue (par id, puis par SKU). "||" gère aussi les champs vides.
      image:
        r.image_url ||
        (rugsData.find((x) => x.id === r.rug_id) ?? rugsData.find((x) => x.sku === r.sku))?.images[0] ||
        null,
    });
    if (r.tracking_number) order.trackingNumber = r.tracking_number;
  }

  const orders: AdminOrder[] = Array.from(map.values()).map(({ statuses, ...o }) => {
    const status = PRIORITY.find((s) => statuses.includes(s)) ?? o.status;
    return { ...o, status, overdue: status === "pending" && isOverdue(o.createdAt) };
  });

  return <AdminOrders orders={orders} />;
}