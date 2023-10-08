//4.Now creating the function customRender which gonna tell how our reactElement gets inserted into container
function customRender(reactElement, mainContainer){
    /* const domElement = document.createElement(reactElement.type); //empty element created of a type
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    mainContainer.appendChild(domElement); */

    //this above code is correct but not modular means we have to setAttribute line by line so in next code we used for in loop
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const p in reactElement.props){
        if(p == 'children') continue;
        domElement.setAttribute(p,reactElement.props[p]);
    }
    mainContainer.appendChild(domElement);

}



//2.Now we gonna see how react see the html elements we try to enter in it
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click to visit google'
};

//1.this is the maincontainer which is selecting the html div which has the id root in index.html
const mainContainer = document.querySelector('#root');
//3.Now we are calling a function through which we gonna put the reactElement inside our mainContainer and through this we gonna print it in index.html
customRender(reactElement,mainContainer);