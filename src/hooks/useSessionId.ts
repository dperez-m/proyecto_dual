import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useSessionId(): string | null {
    const [sessionId, setSessionId] = useState<string | null>(null);

    useEffect(() => {
        const existingId = localStorage.getItem('sessionId');
        if (existingId) {
            setSessionId(existingId);
        } else {
            const newId = uuidv4();
            localStorage.setItem('sessionId', newId);
            setSessionId(newId);
        }
    }, []);

    return sessionId;
}