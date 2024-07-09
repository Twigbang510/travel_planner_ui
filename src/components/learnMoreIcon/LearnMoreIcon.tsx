import "./learnMoreIcon.styles.scss";
export interface LearnMoreIconProps {}

export default function LearnMoreIcon(props: LearnMoreIconProps) {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
}
