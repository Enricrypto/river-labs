export default function ArticlesPage() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Artigos</h1>
        <p className="text-lg text-gray-600 mb-12">
          Pensamento estruturado sobre diagnóstico, estratégia e sistemas para empresas tradicionais em transição.
        </p>

        <div className="grid gap-8">
          {/* Articles will be listed here as they're published */}
          <div className="text-center py-12 text-gray-400">
            <p>Primeiros artigos em breve</p>
          </div>
        </div>
      </div>
    </div>
  );
}
