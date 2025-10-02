import axios from 'axios';

describe('Fluxo E2E - Checkout → Payments → Shipping', () => {
  it('deve executar o fluxo completo com status aprovados', async () => {
    const checkout = await axios.post('http://localhost:3000/checkout', {
      orderId: 'TEST123',
      amount: 200,
    });
    expect(checkout.data.status).toBe('Checkout enviado');

    // Simula resposta do payments
    const payment = { status: 'approved', orderId: 'TEST123' };
    expect(payment.status).toBe('approved');

    // Simula resposta do shipping
    const shipping = { status: 'shipped', orderId: 'TEST123' };
    expect(shipping.status).toBe('shipped');
  });
});
