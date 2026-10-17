import { socialImage } from '@/lib/social-image';

export const alt = 'Gabriel Soares — GSMoney e Game de Datacenters';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return socialImage('Tecnologia para construir.', 'GSMoney / Game de Datacenters');
}
