import React from "react";

interface AttributionProps {}

export const Attributions: React.FC<AttributionProps> = (props) => {
    return (
        <div>
            <a href="https://fonts.google.com/icons?icon.query=l&icon.set=Material+Symbols" title="material icons">Material Icons by Google Fonts</a>
            <a href="https://www.flaticon.com/free-icons/codepen" title="codepen icons">Codepen icons created by Pixel perfect - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Pixel perfect - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/discord" title="discord icons">Discord icons created by Pixel perfect - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">Whatsapp icons created by Pixel perfect - Flaticon</a>
        </div>
    )
}