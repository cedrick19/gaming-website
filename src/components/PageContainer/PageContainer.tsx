import { Block } from "framework7-react";

export const PageContainer = ({
    className,
    children
}: 
{ 
    className?: string, 
    children: React.ReactNode
}) => {
    return <Block className={`container mx-auto ${className}`}>{children}</Block>;
}