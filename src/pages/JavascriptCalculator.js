import React from 'react'
import { sum, divide, subtract, multiply } from 'mathjs'
import '../pagesstyles/JavascriptCalculator.css'


export function JSCalc() {

    const [result, setResult] = React.useState([0]);

    const buttons = [
        { ch: "AC", id: "clear" },
        { ch: "+", id: "add" },
        { ch: "-", id: "subtract" },
        { ch: "*", id: "multiply" },
        { ch: 1, id: "one" },
        { ch: 2, id: "two" },
        { ch: 3, id: "three" },
        { ch: "/", id: "divide" },
        { ch: 4, id: "four" },
        { ch: 5, id: "five" },
        { ch: 6, id: "six" },
        { ch: "=", id: "equals" },
        { ch: 7, id: "seven" },
        { ch: 8, id: "eight" },
        { ch: 9, id: "nine" },
        { ch: ".", id: "decimal" },
        { ch: 0, id: "zero" }
    ];

    return (
        <div id="container0">
            <div id="pageData">JavaScript Calculator</div>
            <div id="calculatorContainer">
                <div id="display">{result}</div>
                <div id="calcbuttons">
                    {buttons.map((cb) => (
                        <ButtonClick
                            className="m-3 p-5"
                            id={cb.id}
                            ch={cb.ch}
                            result={result}
                            setresult={(nresult) => setResult(nresult)}
                            key={cb.ch + " key"}
                        >
                            {cb.ch}
                        </ButtonClick>
                    ))}
                </div>
            </div>
            <p id="designedBy">Designed by JasonR27</p>
        </div>
    );
}

const ButtonClick = (props) => {
    return (
        <BuClick
            ch={props.ch}
            id={props.id}
            result={props.result}
            setresult={(nresult) => props.setresult(nresult)}
        />
    );
};

const BuClick = (props) => {

    const handleBuClick = () => {
      
        if (props.result === [0]) {
            props.setresult([props.ch]);
        } else {
            if (typeof props.ch === "number" || props.ch === ".") {
                if (typeof props.ch === "number") {
                    

                    // adding ability to deal with negative numbers operations

                    if (props.result[props.result.length - 1] === "-" &&
                        typeof props.result[props.result.length - 2] === "string") {
                        props.result[props.result.length - 1] =
                            parseFloat(String(props.result[props.result.length - 1]).concat(
                                String(props.ch)));
                        props.setresult([...props.result]);
                    } else {
                    

                        if (
                            typeof props.result[props.result.length - 1] === "number" ||
                            (typeof props.result[props.result.length - 1] === "string" &&
                                props.result[props.result.length - 1][
                                props.result[props.result.length - 1].length - 1
                                ] === ".")
                        ) {
                            if (typeof props.result[props.result.length - 1] === "number") {

                                props.result[props.result.length - 1] =
                                    parseFloat(String(props.result[props.result.length - 1]).concat(String(props.ch)));
                                props.setresult([...props.result]);
                            } else {
                                if (typeof props.ch === "number") {
                                    props.result[props.result.length - 1] =
                                        String(props.result[props.result.length - 1]).concat(
                                            String(props.ch)
                                        );
                                    props.setresult([...props.result]);
                                } else {
                                    props.result[props.result.length - 1] = parseFloat(
                                        String(props.result[props.result.length - 1]).concat(
                                            String(props.ch)
                                        )
                                    );
                                    props.setresult([...props.result]);
                                }
                            }
                        } else {
                            props.setresult([...props.result, props.ch]);
                        }
                    }
                } else {
                
                    if (typeof props.result[props.result.length - 1] === "string") {                
                        if (props.result[props.result.length - 1].includes(".")) {
                            props.result[props.result.length - 1] = props.result[props.result.length - 1];
                            props.setresult([...props.result]);
                        } else {
                            if (
                                props.result[props.result.length - 1][
                                props.result[props.result.length - 1].length - 1
                                ] === "."
                            ) {
                                props.setresult([...props.result]);
                            } else {
                                props.result[props.result.length - 1] = String(
                                    props.result[props.result.length - 1]
                                );
                                props.result[props.result.length - 1] = props.result[
                                    props.result.length - 1
                                ].concat(props.ch);
                                props.setresult([...props.result]);
                            }
                        }
                    } else {
                        props.result[props.result.length - 1] =
                            String(props.result[props.result.length - 1]).concat(
                                String(props.ch));
                        props.setresult([...props.result]);
                    }
                }
            } else {
                if (props.ch === "+" || props.ch === "/" || props.ch === "*") {
                    
                    if (props.result[props.result.length - 1] === "+" ||
                        props.result[props.result.length - 1] === "/" ||
                        props.result[props.result.length - 1] === "*" ||
                        props.result[props.result.length - 1] === "-") {
                    
                        if (props.result[props.result.length - 1] === "-") {                               

                            if (props.result[props.result.length - 2] === "+" ||
                                props.result[props.result.length - 2] === "*" ||
                                props.result[props.result.length - 2] === "/") {                    
                                let i = props.result.length - 2;                                
                                props.setresult([ ... props.result.slice(0, i).concat(props.ch)]);
                            } else {
                                props.result[props.result.length - 1] = props.ch;
                                props.setresult([...props.result]);
                            }
                        } else {

                            props.result[props.result.length - 1] = props.ch;
                            props.setresult([...props.result]);
                        }
                    } else {
                        if (props.ch === "AC" || "=") {
                            handleOperation();
                        } else {
                            props.setresult([...props.result, props.ch]);
                        }
                    }
                } else {                    
                    if (props.ch === "-") {                    
                        if (props.result[props.result.length - 1] === "-") {                
                            if (props.result[props.result.length - 2] === "-") {
                                props.result[props.result.length - 1] = "-";
                                props.setresult([...props.result]);
                            } else {props.setresult([... props.result, props.ch]);}        
                        } else { props.setresult([...props.result, props.ch]); }
                    } else {
                        handleOperation();
                    }
                }                
            }
        }
    };

    const handleOperation = () => {

        if (props.ch === "AC") {
            props.setresult([0]);
        } else {
            if (props.ch === "=") {

                if (!(Array.isArray(props.result[0]) || props.result.length > 1)) {
                    props.setresult([...props.result]);
                } else {

                    let calcArray = props.result;

                    for (
                        let i = 0;
                        i < 10 && (Array.isArray(calcArray[0]) || calcArray.length > 1);
                        i++
                    ) {

                        props.setresult(AritExpFormula(calcArray));

                        if (Array.isArray(calcArray[0]) || calcArray.length === 1) {
                            if (!Array.isArray(calcArray[0])) {
                                props.setresult(calcArray);
                                break;
                            } else {
                                if (calcArray[0].length === 1) {
                                    props.setresult(calcArray);
                                    break;
                                }
                            }
                        }

                        calcArray = AritExpFormula(calcArray);

                        props.setresult(calcArray);
                    }
                    props.setresult(calcArray);
                }
            } else {
                props.setresult([...props.result, props.ch]);
            }
        }
    };

    const bExpForm = (array) => {

        let array2;

        if (array.includes("*") || array[0].includes("*")) {
            let i;
            if (array.includes("*")) {
                i = array.indexOf("*");
                array2 = [
                    array
                        .slice(0, i - 1)
                        .concat(multiply(array[i - 1], array[i + 1]))
                        .concat(array.slice(i + 2, array.length))
                ];
            } else {
                i = array[0].indexOf("*");
                array2 = [
                    array[0]
                        .slice(0, i - 1)
                        .concat(multiply(array[0][i - 1], array[0][i + 1]))
                        .concat(array[0].slice(i + 2, array[0].length))
                ];
            }
            return array2;
        } else {
            if (array.includes("/") || array[0].includes("/")) {

                let i;

                if (array.includes("/")) {
                    i = array.indexOf("/");
                    array2 = [
                        array
                            .slice(0, i - 1)
                            .concat(divide(array[i - 1], array[i + 1]))
                            .concat(array.slice(i + 2, array.length))
                    ];
                } else {
                    i = array[0].indexOf("/");
                    array2 = [
                        array[0]
                            .slice(0, i - 1)
                            .concat(divide(array[0][i - 1], array[0][i + 1]))
                            .concat(array[0].slice(i + 2, array[0].length))
                    ];
                }

                return array2;
            }
        }
    };

    const bExpFormAdSu = (array) => {

        if (array.length === 3 || Array.isArray(array[0])) {

            if (Array.isArray(array[0])) {

                if (array[0].length === 3) {

                    if (array[0][1] === "-") {

                        return [subtract(array[0][0], array[0][2])];

                    } else {
                        return [sum(array[0][0], array[0][2])];
                    }

                }
            } else {

                if (array[1] === "-") {
                    return [subtract(array[0], array[2])];
                } else {
                    return [sum(array[0], array[2])];
                }
            }
        }

        let array2;

        if (Array.isArray(array[0])) {

            if (array[0].includes("+") && array[0].includes("-")) {
                
                if (array[0].indexOf("+") > array[0].indexOf("-")) {
                    
                    let i = array[0].indexOf("-");     

                    array2 = [
                        array[0]
                            .slice(0, i - 1)
                            .concat(subtract(array[0][i - 1], array[0][i + 1]))
                            .concat(array[0].slice(i + 2, array[0].length))
                    ];                   

                    return array2;

                } else {
                    let i = array[0].indexOf("+");

                    array2 = [
                        array[0]
                            .slice(0, i - 1)
                            .concat(sum(array[0][i - 1], array[0][i + 1]))
                            .concat(array[0].slice(i + 2, array[0].length))
                    ];                    
                }
                return array2;
            } else {

                if (array[0].includes("+")) {

                    let i = array[0].indexOf("+");

                    array2 = [
                        array[0]
                            .slice(0, i - 1)
                            .concat(sum(array[0][i - 1], array[0][i + 1]))
                            .concat(array[0].slice(i + 2, array[0].length))
                    ];

                    return array2;

                } else {

                    let i = array[0].indexOf("-");

                    array2 = [
                        array[0]
                            .slice(0, i - 1)
                            .concat(subtract(array[0][i - 1], array[0][i + 1]))
                            .concat(array[0].slice(i + 2, array[0].length))
                    ];

                    return array2;
                }

            }

        } else {

            if (array.includes("+") && array.includes("-")) {

                if (array.indexOf("+") > array.indexOf("-")) {
                    
                    let i = array.indexOf("-");
                    array2 = [
                        array
                            .slice(0, i - 1)
                            .concat(subtract(array[i - 1], array[i + 1]))
                            .concat(array.slice(i + 2, array.length))
                    ];
                    
                    return array2;
                } else {
                    let i = array.indexOf("+");                    
                    array2 = [
                        array
                            .slice(0, i - 1)
                            .concat(sum(array[i - 1], array[i + 1]))
                            .concat(array.slice(i + 2, array.length))
                    ];                    
                }
                return array2;
            } else {
                // one operator type only calculation for array

                if (array.includes("+")) {

                    let i = array.indexOf("+");

                    array2 = [
                        array
                            .slice(0, i - 1)
                            .concat(sum(array[i - 1], array[i + 1]))
                            .concat(array.slice(i + 2, array.length))
                    ];

                    return array2;

                } else {

                    let i = array.indexOf("-");

                    array2 = [
                        array
                            .slice(0, i - 1)
                            .concat(subtract(array[i - 1], array[i + 1]))
                            .concat(array.slice(i + 2, array.length))
                    ];

                    return array2;
                }
            }
        }
        return array2;
    };

    const AritExpFormula = (array) => {
      
        if (array.length > 2 || Array.isArray(array[0])) {

            if (array.length > 3 || Array.isArray(array[0])) {

                if (Array.isArray(array[0])) {
                    if (array[0].includes("*") || array[0].includes("/")) {
                        return bExpForm(array);
                    }
                }

                if (array.includes("*") || array.includes("/")) {
                    
                    return bExpForm(array);

                } else {
                    // calculate here all additions and subtractions left after all mult and div have been done
                    
                    return bExpFormAdSu(array);
                }
            } else {
                if (array.length === 3) {
                    
                    if (array[1] === "+") {
                    
                        const op = (x, y) => {
                            return parseFloat(parseFloat(x) + parseFloat(y));
                        };
                    
                        return [op(array[0], array[2])];
                    } else {
                        if (array[1] === "-") {
                    
                            return [subtract(array[0], array[2])];
                        } else {
                            if (array[1] === "*") {
                    
                                return [multiply(array[0], array[2])];
                            } else {
                                if (array[1] === "/") {
                    
                                    return [divide(array[0], array[2])];
                                }
                            }
                        }
                    }
                }
            }
        } else {

            if (array.length === 2) {
                return [sum(array[0], array[1])];
            } else {
                return props.result[0];
            }
        }
    };

    return (
        <button
            onClick={handleBuClick}
            className="btn-dft"
            ch={props.ch}
            id={props.id}
            nume={props.nume}
            result={props.result}
            setresult={(nresult) => props.setResult(nresult)}
        >
            {props.ch}
        </button>
    );
};

export default JSCalc;
