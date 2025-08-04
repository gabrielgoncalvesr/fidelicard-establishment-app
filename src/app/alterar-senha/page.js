'use client';

import FormPage, { FormField } from '@/components/FormPage';

export default function AlterarSenhaPage() {
  return (
    <FormPage title="Alterar Senha" buttonText="Salvar Alterações">
      <FormField 
        label="Senha Atual"
        type="password"
        placeholder="Digite sua senha atual"
      />
      <FormField 
        label="Nova Senha"
        type="password"
        placeholder="Digite sua nova senha"
      />
      <FormField 
        label="Confirmar Nova Senha"
        type="password"
        placeholder="Confirme sua nova senha"
      />
    </FormPage>
  );
}
