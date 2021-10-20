import { serverOnlyObject } from 'package'

export default function Home({}) {
    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}

export function getStaticProps() {
    console.log(serverOnlyObject)
    return {
        props: {},
    }
}
