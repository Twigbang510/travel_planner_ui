export interface TextStrokeProps {
  title: string;
}

export default function TextStroke({ title }: TextStrokeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={400}
      height={155}
      viewBox="0 0 400 101"
    >
      <text
        fill="#FFF"
        fillOpacity={0}
        fillRule="evenodd"
        stroke="#525252"
        strokeWidth=".6"
        fontSize={130}
        fontWeight="bold"
        transform="translate(-994 -151)"
      >
        <tspan x={990} y={250}>
          {title}
        </tspan>
      </text>
    </svg>
  );
}
