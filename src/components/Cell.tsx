import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { FC } from "react";

const CellVariants = cva("p-2 flex flex-col border rounded-lg", {
	variants: {
		columnWidth: {
			1: "col-span-1",
			2: "col-span-2",
			3: "col-span-3",
			4: "col-span-4"
		},
		rowHeight: {
			1: "row-span-1",
			2: "row-span-2",
			3: "row-span-3",
			4: "row-span-4"
		},
		verticalAlignment: {
			top: "justify-start",
			center: "justify-center",
			bottom: "justify-end",
		},
		horizontalAlignment: {
			left: "items-start",
			center: "items-center",
			right: "items-end",
		},
	},
	compoundVariants: [
		{
			columnWidth: [2, 3, 4],
			rowHeight: [2, 3, 4],
			class: "border-green-500",
		},
	],
	defaultVariants: {
		columnWidth: 1,
		rowHeight: 1,
		verticalAlignment: "top",
		horizontalAlignment: "center",
	},
});

interface CellProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CellVariants> {}

export const Cell: FC<CellProps> = ({ className, columnWidth, rowHeight, verticalAlignment, horizontalAlignment, ...props }) => {
	return <div className={twMerge(CellVariants({ columnWidth, rowHeight, verticalAlignment, horizontalAlignment, className }))} {...props} />;
};
