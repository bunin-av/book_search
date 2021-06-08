export function SearchHistory(props: { value: string[] }) {
    const historyElements = props.value.map(e => {
          return (
            <li key={Math.random()*100000000}>
                {e}
            </li>
          )
      }
    )

    return (
      <ul>{historyElements}</ul>
    )
}