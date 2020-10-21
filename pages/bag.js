import Head from 'next/head'
import { observer } from 'mobx-react-lite'

const Bag = ({ bag }) => {
    const { items, removeItem } = bag
    return (
        <div className="container">
            <Head>
                <title>Bag</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <ul>
                    {items.map(item => (
                        <li key={item}>
                            <span>{item.name} x</span>
                            <input type="number" value={item.quantity} />
                            <button onClick={() => removeItem(item.name)}>remove</button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default observer(Bag)
