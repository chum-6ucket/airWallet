import styles from './DND.module.css';
import React, {useState, DragEvent} from 'react';
import {Simulate} from 'react-dom/test-utils';
import classNames from 'classnames';

// import dragOver = Simulate.dragOver;
// import {DNDProps} from './DND.props';
// import './../App/App.scss';

export const DND = (): JSX.Element => {
    const [boards, setBoards] = useState([
        {id: 1, title: 'Сделать', items: [{id: 1, title: 'пойдика'}, {id: 2, title: 'апойдика'}]},
        {id: 2, title: 'НеСделать', items: [{id: 3, title: 'неиди'}, {id: 4, title: 'неиди'}]}

    ])

    // board: { id: number; title: string; items: { id: number; title: string }[] }, item: { id: number; title: string })

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    function handleDragEvent(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const target = e.target as Element;
        e.currentTarget.style.boxShadow = '0 4px 3px grey';

        if (target.className === 'DND_item__39lgR') {
            e.currentTarget.style.boxShadow = '0 4px 3px grey';
            e.currentTarget.style.boxShadow = ''
            //     e.currentTarget.style.borderStyle = 'dotted';
            //     e.currentTarget.style.opacity = '.3';
        }
    }

    function dragLeaveHandler(e: DragEvent<HTMLDivElement>) {
        e.currentTarget.style.boxShadow = 'none';
        // e.currentTarget.style.boxShadow = '0 4px 3px gray';
        // e.currentTarget.style.opacity = '3'


    }

    function dragStartHandler(e: DragEvent<HTMLDivElement>, board: any, item: any) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragEndHandler(e: DragEvent<HTMLDivElement>) {
        e.currentTarget.style.boxShadow = 'none';
        // e.currentTarget.style.opacity = '1'

    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, board: { id: number; title: string; items: { id: number; title: string }[] }, item: { id: number; title: string }) {
        e.preventDefault()
        // @ts-ignore
        const currentIndex = currentBoard.items.indexOf(currentItem)
        // @ts-ignore
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        // @ts-ignore
        board.items.splice(dropIndex + 1, 0, currentItem)
        // @ts-ignore
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            // @ts-ignore
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b;
        }))
    }

    function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: any) {
        board.items.push(currentItem)
        // @ts-ignore
        const currentIndex = currentBoard.items.indexOf(currentItem)
        // @ts-ignore
        currentBoard.items.splice(currentIndex, 1)// @ts-ignore
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            // @ts-ignore
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b;
        }))
    }

    function onDropHandler(e: any) {
        e.preventDefault();
        var data = e.dataTransfer.getData("Text");
        e.target.appendChild(document.getElementById(data));
        // @ts-ignore
        document.getElementById("demo").innerHTML = "The p element was dropped";
    }

    return (
        // <div className={styles.app}>
        //     {boards.map(board =>
        //         <div
        //             className={styles.board}
        //             onDragOver={(e) => handleDragEvent(e)}
        //             onDrop={(e) => dropCardHandler(e, board)}
        //         >
        //             <div className={styles.board__title}>{board.title}</div>
        //             {board.items.map(item =>
        //                 <div
        //                     onDragOver={(e) => handleDragEvent(e)}
        //                     onDragLeave={e => dragLeaveHandler(e)}
        //                     onDragStart={(e) => dragStartHandler(e, board, item)}
        //                     onDragEnd={(e) => dragEndHandler(e)}
        //                     // onDrop={(e) => dropHandler(e, board, item)}
        //                     onDrop={alert}
        //                     // className="todo"
        //                     draggable={true}
        //                     className={styles.item}
        //                 >
        //                     {item.title}
        //                 </div>
        //             )}
        //         </div>
        //     )}
        // </div>

        <div className={styles.app}>
            <div className={styles.board}>
                <div className={styles.board__title}> title</div>
                <div
                    onDrop={e => onDropHandler(e)}
                    draggable={true}
                    className={styles.item}
                >
                    asdf
                </div>
                <div
                    onDrop={e => onDropHandler(e)}
                    draggable={true}
                    className={styles.item}
                >
                    asdf
                </div>
                <p id="demo"></p>
            </div>
        </div>
    )
};