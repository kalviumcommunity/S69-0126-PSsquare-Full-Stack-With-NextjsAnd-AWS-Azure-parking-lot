import connectDB from "@/lib/mongodb";
import ParkingSlot from "@/models/ParkingSlot";

export async function GET() {
  try {
    await connectDB();
    const slots = await ParkingSlot.find({});
    return new Response(JSON.stringify(slots), { status: 200 });
  } catch (error) {
    return new Response("Error fetching slots", { status: 500 });
  }
}

export async function POST() {
  try {
    await connectDB();

    const newSlot = await ParkingSlot.create({
      slotNumber: Math.floor(Math.random() * 1000),
    });

    return new Response(JSON.stringify(newSlot), { status: 201 });
  } catch (error) {
    return new Response("Error creating slot", { status: 500 });
  }
}