import api from "../api";

interface FetcherResponse<T> {
  data: T | undefined;
  isLoading: boolean;
  error: string | null;
}

const fetcher = async <T>(path: string): Promise<FetcherResponse<T>> => {
  let response: FetcherResponse<T> = {
    data: undefined,
    isLoading: true,
    error: null,
  };

  try {
    // Atualiza o estado para isLoading: true
    response.isLoading = true;

    const res = await api.get<T>(path);

    // Atualiza os dados da resposta
    response.data = res.data;
  } catch (err) {
    // Em caso de erro, guarda a mensagem de erro
    response.error = err instanceof Error ? err.message : "Erro desconhecido";
    console.log(err);
  } finally {
    // Após a requisição ser finalizada, altera o estado de loading
    response.isLoading = false;
  }

  return response;
};

export default fetcher;
