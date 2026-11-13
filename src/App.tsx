import { Icon } from '@iconify/react';

// Sample data for demo cards
const techs = [
  {
    name: 'React',
    icon: 'mdi:react',
    color: 'text-cyan-400',
    hoverColor: 'hover:text-cyan-300',
    bg: 'bg-cyan-500/10',
  },
  {
    name: 'TypeScript',
    icon: 'mdi:language-typescript',
    color: 'text-blue-500',
    hoverColor: 'hover:text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    name: 'Tailwind',
    icon: 'mdi:tailwind',
    color: 'text-teal-400',
    hoverColor: 'hover:text-teal-300',
    bg: 'bg-teal-500/10',
  },
  {
    name: 'Iconify',
    icon: 'mdi:rocket-launch',
    color: 'text-purple-500',
    hoverColor: 'hover:text-purple-400',
    bg: 'bg-purple-500/10',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-8 md:p-12">
      {/* Responsive heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
        Stack Playground
      </h1>
      <p className="text-center text-gray-400 text-sm sm:text-base mb-10">
        Hover over cards & resize the browser
      </p>

      {/* Responsive grid: 1 col on mobile, 2 on sm, 4 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className={`
              ${tech.bg}
              rounded-xl p-6
              border border-white/10
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-${tech.name.toLowerCase()}-500/20
              hover:border-white/20
              cursor-pointer
            `}
          >
            {/* Icon: size changes with screen size, color changes on hover */}
            <Icon
              icon={tech.icon}
              className={`
                w-10 h-10 sm:w-14 sm:h-14
                mx-auto mb-4
                transition-colors duration-300
                ${tech.color} ${tech.hoverColor}
              `}
            />
            
            {/* Text: responsive font size + hover underline */}
            <p className="text-center text-sm sm:text-base font-medium group-hover:underline">
              {tech.name}
            </p>

            {/* Hidden on mobile, visible on sm and up */}
            <p className="hidden sm:block text-center text-xs text-gray-400 mt-2">
              hover me
            </p>
          </div>
        ))}
      </div>

      {/* Responsive visibility demo */}
      <div className="mt-12 max-w-6xl mx-auto text-center">
        <div className="block sm:hidden bg-yellow-500/20 text-yellow-300 rounded-lg p-3 text-sm">
          🟡 Mobile view (below sm)
        </div>
        <div className="hidden sm:block md:hidden bg-blue-500/20 text-blue-300 rounded-lg p-3 text-sm">
          🔵 Tablet view (sm → md)
        </div>
        <div className="hidden md:block lg:hidden bg-green-500/20 text-green-300 rounded-lg p-3 text-sm">
          🟢 Desktop small (md → lg)
        </div>
        <div className="hidden lg:block bg-purple-500/20 text-purple-300 rounded-lg p-3 text-sm">
          🟣 Desktop large (lg and up)
        </div>
      </div>
    </div>
  );
}