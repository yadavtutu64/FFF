import { getBatches } from "@/services/api";
import BatchCard from "@/components/BatchCard";
import { Batch } from "@/types";

export default async function HomePage() {
  const batches: Batch[] = await getBatches();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Explore Batches
        </h1>
        <p className="text-gray-400 mt-2">Premium education at your fingertips</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {batches.map((batch) => (
          <BatchCard key={batch._id} batch={batch} />
        ))}
      </div>
    </div>
  );
}
