import Image from "next/image";

const data = [
  {
    image: "/finpay.webp",
    description: "FinPay uses technology to improve and innovate financial services like banking, payments, and investing."
  },
  {
    image: "/ChangeGPS-2.webp",
    description: "Software for compliance, advisory, and the business of accounting."
  },
  {
    image: "/paiid.png",
    description: "Paiid is tap-to-pay POS for subscribing merchant."
  },
  {
    image: "/pet-price.png",
    description: "Software for managing dog washes for pet owners."
  },
  {
    image: "/venue.png",
    description: "VenueSmart offers integrated solutions for event management, including payments, access control, and data insights."
  },
]

export const Portfolio = () => {
  return <div className="flex items-center">
    <div className="grid grid-cols-3 gap-12">
      {data.map((item) => 
        <div className="flex flex-col gap-2 items-center wrap w-[300px]">
          <div className="h-[150px] flex items-center bg-white rounded-xl py-4">
            <Image
              className="rounded-xl"
              src={item.image}
              alt="Personal Picture"
              width={150}
              height={38}
              priority
            />
          </div>
          <div className="pt-6 text-xl">{item.description}</div>
        </div>
      )}
    </div> 
  </div>
}
