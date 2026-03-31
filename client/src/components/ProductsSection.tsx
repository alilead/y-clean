/*
 * Y-Clean — Products Section
 * Design: Display cleaning products and supplies with pricing
 */
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Package, Droplet, Sparkles } from "lucide-react";

interface Product {
  name: string;
  volume: string;
  price: string;
  category: string;
}

const products: Product[] = [
  { name: "CITRONAX", volume: "5 litres", price: "48.20", category: "floor" },
  { name: "CALCASOL", volume: "5 litres", price: "46.95", category: "bathroom" },
  { name: "GLAVIT", volume: "5 litres", price: "34.85", category: "window" },
  { name: "Kitchin", volume: "1 litre", price: "16.32", category: "kitchen" },
  { name: "WABOL", volume: "1 litre", price: "9.90", category: "general" },
];

interface ServiceSupplies {
  service: string;
  products: string[];
  materials: string[];
}

const serviceSupplies: ServiceSupplies[] = [
  {
    service: "home",
    products: [
      "Nettoyant multi-surfaces : 1 à 2 litres",
      "Désinfectant WC : 500 ml à 1 litre",
      "Nettoyant salle de bain / calcaire : 500 ml",
      "Produit pour vitres : 250 à 500 ml",
      "Nettoyant pour sols (parquet, carrelage) : 1 litre",
      "Produit pour cuisine (dégraissant) : 500 ml",
    ],
    materials: [
      "Aspirateur (1 unité)",
      "Balai + seau + serpillière (1 set)",
      "Chiffons microfibre : 5 à 10 pièces",
      "Éponges / brosses : 3 à 5 pièces",
      "Gants jetables : 10 paires",
    ],
  },
  {
    service: "office",
    products: [
      "Nettoyant multi-surfaces : 2 litres / semaine",
      "Désinfectant pour sanitaires : 1 litre / semaine",
      "Nettoyant vitres intérieures : 500 ml / semaine",
      "Nettoyant sols : 1 à 2 litres / semaine",
      "Spray dépoussiérant (meubles / bureaux) : 500 ml",
    ],
    materials: [
      "Aspirateur industriel",
      "Balai + seau + serpillière (2 sets)",
      "Chiffons microfibre : 10 à 15 pièces",
      "Gants jetables : 20 paires",
      "Raclette pour vitres : 1 unité",
      "Sacs poubelles : 1 lot",
    ],
  },
  {
    service: "restaurant",
    products: [
      "Dégraissant puissant cuisine : 1 à 2 litres",
      "Nettoyant inox / surfaces professionnelles : 500 ml",
      "Désinfectant sanitaire : 1 litre",
      "Nettoyant vitres",
    ],
    materials: [],
  },
];

export default function ProductsSection() {
  const { t } = useLanguage();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "floor":
      case "general":
        return <Sparkles className="w-5 h-5 text-primary" />;
      case "bathroom":
      case "kitchen":
        return <Droplet className="w-5 h-5 text-primary" />;
      default:
        return <Package className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            {t("products.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("products.desc")}
          </p>
        </motion.div>

        {/* Products Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            {t("products.pricing_title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-teal-50/60 rounded-lg p-5 border border-teal-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{getCategoryIcon(product.category)}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{product.volume}</p>
                    <p className="text-xl font-bold text-primary">CHF {product.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            {t("products.supplier")}:{" "}
            <a
              href="https://www.menegalli.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Menegalli
            </a>
          </p>
        </motion.div>

        {/* Service Supplies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-8 text-center">
            {t("products.supplies_title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceSupplies.map((supply, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-border/30 shadow-sm"
              >
                <h4 className="font-semibold text-lg mb-4 text-primary">
                  {t(`products.service_${supply.service}`)}
                </h4>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {t("products.products")}
                  </p>
                  <ul className="space-y-1.5">
                    {supply.products.map((product, j) => (
                      <li key={j} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {supply.materials.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {t("products.materials")}
                    </p>
                    <ul className="space-y-1.5">
                      {supply.materials.map((material, j) => (
                        <li key={j} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
