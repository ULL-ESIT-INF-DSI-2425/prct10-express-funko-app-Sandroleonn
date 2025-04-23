interface Spell {
    id: string;
    name: string;
    incantation: string;
    effect: string;
    canBeVerbal: boolean;
    type: string;
    light: string;
    creator: string | null;
}

interface SpellQueryParams {
    Name?: string;
    Type?: string;
    Incantation?: string;
}

export function findSpell(params?: SpellQueryParams): Promise<Spell[]> {
    return new Promise((resolve, reject) => {
        // Construir la URL con los parámetros de consulta
        const baseUrl = 'https://wizard-world-api.herokuapp.com/Spells';
        const queryParams = new URLSearchParams();
        
        if (params?.Name) queryParams.append('Name', params.Name);
        if (params?.Type) queryParams.append('Type', params.Type);
        if (params?.Incantation) queryParams.append('Incantation', params.Incantation);

        const url = `${baseUrl}?${queryParams.toString()}`;

        // Realizar la petición HTTP
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: Spell[]) => {
                if (!data || data.length === 0) {
                    reject(new Error('No se encontraron hechizos con los criterios especificados'));
                } else {
                    resolve(data);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}