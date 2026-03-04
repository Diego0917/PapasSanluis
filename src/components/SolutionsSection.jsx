export function SolutionsSection() {
  const categories = [
    {
      name: 'Salsas',
      image: 'https://images.unsplash.com/photo-1741519140428-5a4f8ee78ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVjZXMlMjBjb25kaW1lbnRzfGVufDF8fHx8MTc3MjUwNDc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Conservados',
      image: 'https://images.unsplash.com/photo-1579763209326-faf2551f9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uZWQlMjBmb29kJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzcyNDYyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Lácteos',
      image: 'https://images.unsplash.com/photo-1621458472871-d8b6a409aba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMHByb2R1Y3RzJTIwbWlsa3xlbnwxfHx8fDE3NzI0NTU4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Aceites',
      image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc3MjQyNjM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Bases',
      image: 'https://images.unsplash.com/photo-1707729509134-fe9ad5f6a5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvZHVjdHMlMjBncm9jZXJ5fGVufDF8fHx8MTc3MjUwNDc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Importados',
      image: 'https://images.unsplash.com/photo-1579763209326-faf2551f9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uZWQlMjBmb29kJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzcyNDYyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Carnes',
      image: 'https://images.unsplash.com/photo-1625331725309-83e4f3c1373b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBmb29kfGVufDF8fHx8MTc3MjQ2NjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#003DA5] mb-2">
            Soluciones prácticas para negocios exigentes
          </h2>
          <p className="text-[#FFC107] text-xl">
            Encuentra todo en un solo lugar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-shadow">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-[#003DA5] text-sm text-center group-hover:text-[#FFC107] transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
