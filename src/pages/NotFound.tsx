import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
      <div className="space-y-6 max-w-md">
        <div className="space-y-3">
          <h1 className="text-8xl font-black text-red-600 italic">404</h1>
          <h2 className="text-2xl font-bold">Página no encontrada</h2>
          <p className="text-zinc-400">
            La página que estás buscando no existe o fue movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link to="/">Volver al inicio</Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Volver atrás
          </Button>
        </div>
      </div>
    </div>
  );
}
