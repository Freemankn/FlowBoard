// OuterBox.tsx

type OuterBoxProps = {
  children: React.ReactNode;
};

function OuterBox({ children }: OuterBoxProps) {
  return (
    <div className="box">
      {children}
    </div>
  );
}

export default OuterBox;