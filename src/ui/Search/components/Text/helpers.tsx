import { ReactNode } from "react";

export const getContent = (value: string, searchedValue = '', getMatchedValueCompoent: (content: ReactNode) => JSX.Element) => {
    const isMatch = !searchedValue || !value.toLowerCase().includes(searchedValue.toLowerCase());

    if (isMatch) {
        return <>{value}</>;
    }

    const startIndex = value.toLowerCase().indexOf(searchedValue.toLowerCase());
    const endIndex = startIndex + searchedValue.length;

    const beforeMatch = value.slice(0, startIndex);
    const match = value.slice(startIndex, endIndex);
    const afterMatch = value.slice(endIndex);

    return (
        <>
            {beforeMatch}
            <>{getMatchedValueCompoent(match)}</>
            {afterMatch}
        </>
    )
};
