import image from "./background.jpg";

function Component() {
    return (
        <div className="image_div" style={{
            backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",
            height: 1200, width: 1519
        }}>
            <ul className="unordered_list"><li><button className="button_li">1</button></li><li><button className="button_li">2</button></li><li><button className="button_li">3</button></li></ul>


        </div>
    );
}

export { Component };

function Nav() {
    return (<nav className="navbar"><ol><li>1</li><li>2</li><li>3</li><li>4</li></ol></nav>)
}
export { Nav };