import Card from './Card'

export function Cardlist({ data }) {
  return (
    <div>
      {
        data.map((item) => (
          <div>
            <Card
              key={item.title}
              title={item.title}
              description={item.desc}
            />
          </div>
        ))
      }
    </div>
  )
}