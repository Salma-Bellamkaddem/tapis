import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "E-mail invalide" }, { status: 400 });
    }

    // Initialisation dynamique à l'intérieur de la requête (évite l'erreur au build)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase credentials are missing");
      return NextResponse.json({ error: "Erreur de configuration serveur" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insertion dans la table Supabase
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }]);

    if (error) {
      // Code 23505 = Violation de contrainte unique (e-mail déjà existant)
      if (error.code === "23505") {
        return NextResponse.json(
          { success: true, message: "Cet e-mail est déjà inscrit !" },
          { status: 200 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, message: "Inscription réussie !" });
  } catch (error) {
    console.error("Erreur API Newsletter:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}