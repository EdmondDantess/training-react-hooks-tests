import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'React Memo && useMemo && useCallback',
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersContainer = (props: { users: string[] }) => {
    console.log('render users')
    return (<div>
        {props.users.map((el, index) => <div key={index}>{el}</div>)}
    </div>)
}

const Users = React.memo(UsersContainer)

export const Example1 = () => {
    console.log('+1')
    const [counter, setCounter] = useState(0)
    const [users, setUSers] = useState(['Dima', 'Valera', 'Artem', 'Maksim'])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Counter count={counter}/>
        <Users users={users}/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
    </>
}


export const Example2 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResA = tempResA * i
        }
        return tempResA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

export const ExampleUseCAllback = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    // const newArray = useMemo(() => {
    //     const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
    //     return newArray
    // }, [books])


    const memoAddBooks1 = useMemo(()=> {
       return () => {
           const newBook = [ ...books, 'Angular ' + new Date().getTime() ]
           setBooks(newBook)
       }
    }, [books])
    const memoAddBooks2 = useCallback(()=> {
           const newBook = [ ...books, 'Angular ' + new Date().getTime() ]
           setBooks(newBook)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
       <Book  addBook = {memoAddBooks2} books={books}/>
    </>
}

type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}
const BooksSecret= (props: BookSecretPropsType) => {
    console.log('rendered BooksSecret')
    return <div>
        <button onClick={()=> props.addBook()}>add book</button>
        {
            props.books.map((book, i) => <div key ={i}>{book}</div>)
        }
    </div>
}
const Book = React.memo(BooksSecret)