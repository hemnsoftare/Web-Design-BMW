import Image from "next/image";
import React from "react";

const BlogCard = ({
  image,
  type,
  number,
}: {
  number: number;
  type: string;
  image: string;
}) => {
  return (
    <div
      className={` ${
        type !== "d" &&
        " max-w-[1000px] items-start flex-col justify-start flex gap-2"
      } w-full ${type === "grid" && "max-h-[600px]  overflow-hidden "} `}
    >
      <h2 className="font-bold lg:text-[18px] xl:text-[24px]">
        topic 1 Lorem ipsum dolor sit .
      </h2>
      <p className="text-neutral-500 text-[12px]">
        by
        <span className="text-teal-600 underline underline-offset-2">
          bahdden software
        </span>
        on Monday : 25/2/2024 121:00 PM
      </p>
      <Image
        src={image}
        alt="image"
        width={500}
        height={200}
        className={`w-full rounded-lg overflow-hidden
    ${
      type !== "d"
        ? type === "grid"
          ? "lg:max-h-[250px] xl:min-h-[350px] "
          : "min-h-[350px]"
        : number % 2 === 1
        ? "float-start mx-2 min-h-[300px]"
        : "float-end mx-2 min-h-[300px]"
    }`}
      />

      <p
        className={` ${
          type === "grid"
            ? "lg:text-[14px] xl:text-[16px]"
            : " xl:text-[20px] lg:text-[14px]"
        }`}
      >
        Lorem ipsum dolor sit amet consect elit. Optio, quos. Ea o s labore
        voluptas eos totam rem vero voluptates. dignissimo fficia rerum
        voluptate, quas ut excepturi velit dignissimo s labore voluptas eos
        totam rem vero voluptates. dignissimo s labore vfficia rerum voluptate,
        quas ut excepturi velit dignissimo s labore voluptas eos totam rem vero
        voluptati unde illo facilis enim, praesentium ut itaque vel provident.
        Officiis tam rem vero v eos totam rem vero voluptates. dignissimo sbr{" "}
        {type !== "grid" && (
          <span>
            labore officia rerum voluptate, am rem vero voluptates. dignissimo
            labore officia rerum voluptate quas ut excepturi velit dignissimo s
            labore voluptas eos totam rem vero voluptati unde illo facilis enim,
            praesentium ut itaque vel provident. Officiis tam rem vero v eos
            totam rem vero voluptates. dignissimo s labore officia rerum
            voluptate, quas ut excepturi velit dignissimo s labore voluptas eos
            totam rem vero volupt dignissimo s labore voluptas eos totam rem
            vero voluptates. dignissimo s labore voluptas eos totam rem vero
            voluptates.
          </span>
        )}
      </p>
    </div>
  );
};

export default BlogCard;
