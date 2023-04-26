export default function FlexH({children}: {children: React.ReactNode}){
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
        }}>{children}</div>
    );
}