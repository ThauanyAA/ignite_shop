interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main>
      <h1>Produto: {params.id}</h1>
      <p>Detalhes do produto com ID {params.id} aparecerão aqui.</p>
    </main>
  );
}

