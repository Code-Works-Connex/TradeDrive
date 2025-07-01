'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const CsrfContext = createContext<{ token: string }>({ token: '' });

export const useCsrf = () => useContext(CsrfContext);

export const CsrfProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/csrf-token`, {
          credentials: 'include',
        });
        const data = await res.json();
        setToken(data.csrfToken);
      } catch (error) {
        console.error('❌ Failed to fetch CSRF token:', error);
      }
    };

    fetchToken();
  }, []);

  return (
    <CsrfContext.Provider value={{ token }}>
      {children}
    </CsrfContext.Provider>
  );
};
