import { NextResponse } from "next/server";
import UserModel from "../../../../mongodbConnect";

export async function POST(request) {
  const {
    name,
    email,
    email_refined,
    phone,
    password,
    withdrawalPin,
    taxCodePin,
    autoTrades,
    isVerified,
    tradingBalance,
    totalDeposited,
    totalWithdrawn,
    totalAssets,
    totalWon,
    totalLoss,
    lastProfit,
    investmentPackage,
    planBonus,
    tradingProgress,
  } = await request.json();

  try {
    // Find the user by email and update their data
    const user = await UserModel.findOneAndUpdate(
      { email: email_refined },
      {
        name,
        phone,
        password,
        email,
        withdrawalPin,
        taxCodePin,
        autoTrades,
        isVerified,
        tradingBalance,
        totalDeposited,
        totalWithdrawn,
        totalAssets,
        totalWon,
        totalLoss,
        investmentPackage,
        lastProfit,
        planBonus,
        tradingProgress,
      },
      { new: true } // Return the updated document
    );
    console.log(email);

    if (!user) {
      return NextResponse.error("User not found", { status: 404 });
    }

    return NextResponse.json({ message: "User updated successfully", user });
  } catch (error) {
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
