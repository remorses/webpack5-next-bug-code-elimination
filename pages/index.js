import http from '_http_common'

export default function Home({}) {
    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}

export function getStaticProps() {
    console.log(http)
    return {
        props: {},
    }
}
