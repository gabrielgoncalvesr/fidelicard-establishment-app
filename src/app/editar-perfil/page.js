'use client';

import FormPage, { FormField } from '@/components/FormPage';

export default function EditarPerfilPage() {
  return (
    <FormPage title="Editar Perfil" buttonText="Salvar Alterações">
      <FormField 
        label="Nome Completo"
        type="text"
        placeholder="Seu nome completo"
        value="User Name"
      />
      <FormField 
        label="Email"
        type="email"
        placeholder="seu@email.com"
        value="user@email.com"
      />
    </FormPage>
  );
}
