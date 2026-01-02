import CategoryPage from "@/components/category/CategoryPage";

export default function TravelPage() {
  return (
    <CategoryPage
      title="Travel"
      description="Practical travel knowledge, itineraries, planning guides, and travel gear recommendations for domestic and international trips."
      articles={[
        {
          title: "7-Day Rajasthan Itinerary",
          slug: "7-day-rajasthan-itinerary",
        },
        {
          title: "Best Budget Travel Gear",
          slug: "best-budget-travel-gear",
        },
        {
          title: "International Travel Packing Checklist",
          slug: "international-travel-packing-checklist",
        },
      ]}
    />
  );
}
