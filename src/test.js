import image from "./background.jpg";

function Component() {
    return (
        <div style={{
            backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",
            height: 1200, width: 1519
        }}>

        </div>
    );
}

export { Component };