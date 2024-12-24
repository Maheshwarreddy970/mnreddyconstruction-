import { ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function constructMetadata({
  title = "Mn Reddy Constructions - Top Builders in Hyderabad",
  description = "Mn Reddy Constructions specializes in delivering high-quality residential and commercial projects in Hyderabad. Read our reviews and explore our successful projects.",
  image = "https://www.mnreddyconstructions.in/thumbnail.png",
  icons = "https://www.mnreddyconstructions.in/Picsart_24-12-10_11-35-05-391.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Mn Reddy Constructions",
      "Mn Reddy Constructions Hyderabad",
      "Mn Reddy Constructions Reviews",
      "Mn Reddy Constructions Projects",
      "Top builders in Hyderabad",
      "Residential construction Hyderabad",
      "Commercial construction Hyderabad",
      "Trusted builders in Shamshabad",
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@mnreddyconstructions",
    },
    icons,
    metadataBase: new URL("https://www.mnreddyconstructions.in/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
