import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { location } from '../../features/page/locationSlice'
import { False } from "../../features/page/searchValueSlice";

const LiveSearch = ({
    results = [],
    renderItem,
    value,
    onChange,
    onSelect,
}) => {
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const resultContainer = useRef(null);
    const [showResults, setShowResults] = useState(false);
    const [defaultValue, setDefaultValue] = useState("");

    const [target, setTarget] = useState("")

    const searchValue = useSelector(state => state.searchValue.value)
    const dispatch = useDispatch()


    const handleSelection = (selectedIndex) => {
        const selectedItem = results[selectedIndex];
        if (!selectedItem) return resetSearchComplete();
        onSelect && onSelect(selectedItem);
        resetSearchComplete();
    };

    const resetSearchComplete = useCallback(() => {
        setFocusedIndex(-1);
        setShowResults(false);
    }, []);

    const handleKeyDown = (e) => {
        const { key } = e;
        let nextIndexCount = 0;

        // move down
        if (key === "ArrowDown")
            nextIndexCount = (focusedIndex + 1) % results.length;

        // move up
        if (key === "ArrowUp")
            nextIndexCount = (focusedIndex + results.length - 1) % results.length;

        // hide search results
        if (key === "Escape") {
            resetSearchComplete();
        }

        // select the current item
        if (key === "Enter") {
            e.preventDefault();
            handleSelection(focusedIndex);
        }

        setFocusedIndex(nextIndexCount);
    };

    const handleChange = (e) => {
        setDefaultValue(e.target.value);
        setTarget(e.target.value)
        onChange && onChange(e); 
    };

    useEffect(() => {
        if (!resultContainer.current) return;

        resultContainer.current.scrollIntoView({
            block: "center",
        });
    }, [focusedIndex]);

    useEffect(() => {
        if (results.length > 0 && !showResults) setShowResults(true);

        if (results.length <= 0) setShowResults(false);
    }, [results]);

    useEffect(() => {
        if (value) setDefaultValue(value);
        dispatch(location(value))
    }, [value]);

    return (
        <div className=" -ml-4 flex items-center justify-center">
            <div
                tabIndex={1}
                onBlur={resetSearchComplete}
                onKeyDown={handleKeyDown}
                className="relative"
            >
               {searchValue===true && target==="" && !value? <h1 className="text-[#f5544e]">required...</h1>:""}
                <input
                    value={defaultValue}
                    onChange={handleChange}
                    type="text"
                    className={searchValue===true && target==="" && !value ?"w-[180px] px-3 py-1 text-lg rounded-full border-2 border-[#f5544e] focus:border-[#f5544e] outline-[#f5544e] transition": "w-[180px] px-3 py-1 text-lg rounded-full border-2 border-gray-500 focus:border-gray-700 outline-none transition"}
                    placeholder="Search location..."
                />

                {/* Search Results Container */}
                {showResults && (
                    <div className="text-white absolute w-full p-2 bg-[#2A4953] border shadow-2xl rounded-t-lg rounded-b-lg rounded-br max-h-56 overflow-y-auto">
                        {results.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    onMouseDown={() => handleSelection(index)}
                                    ref={index === focusedIndex ? resultContainer : null}
                                    style={{
                                        backgroundColor:
                                            index === focusedIndex ? "rgb(67, 153, 239)" : "",
                                    }}
                                    className="cursor-pointer hover:bg-[#2c8ced]  px-2"
                                >
                                    {renderItem(item)}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LiveSearch;