import { colors } from '@ignite-ui-rt/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([colorName, colorValue]) => {
    return (
      <div key={colorValue} style={{ background: colorValue, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'monospace',
            color: getContrast(colorValue, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${colorName}</strong>
          <span>{colorValue}</span>
        </div>
      </div>
    )
  })
}
