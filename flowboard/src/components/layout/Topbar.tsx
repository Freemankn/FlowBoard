type TopBarLineProps = {
  children: React.ReactNode;
};


function TopBarLine({children}: TopBarLineProps) {
    return (
        <div className="line">
            {children}
        </div>
    );
}

export default TopBarLine;