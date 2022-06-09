import React from 'react';
import Card from "./Card";
import Data from "./Data";

function Section(props) {
    return (
        <>
            {/* <!-- Section--> */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        
                        {Data.map((Item) => <Card Name={Item.Name} Price={Item.Price} addItem={props.addItem} removeItem={props.removeItem}/>)}
                        
                        {/* <Card Item="Fancy Product" Price="$40.00-$80" addItem={props.addItem} removeItem={props.removeItem} />
                        <Card Item="Special Item" Price="$18.00" addItem={props.addItem} removeItem={props.removeItem} />
                        <Card Item="Sale Item" Price="$25.00" addItem={props.addItem} removeItem={props.removeItem} />
                        <Card Item="Popular Item" Price="$40.00" addItem={props.addItem} removeItem={props.removeItem} />
                        <Card Item="Sale Item" Price="$25.00" addItem={props.addItem} removeItem={props.removeItem} />
                        <Card Item="Fancy Product" Price="$120.00-$280.00" addItem={props.addItem} removeItem={props.removeItem} />
                        <Card Item="Special Item" Price="$18.00" addItem={props.addItem} removeItem={props.removeItem} />
                        <Card Item="Popular Item" Price="$40.00" addItem={props.addItem} removeItem={props.removeItem} /> */}
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default Section