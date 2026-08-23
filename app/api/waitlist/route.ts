import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, productSlug } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'E-mail inválido ou não fornecido.' },
        { status: 400 }
      );
    }

    // Log the submission in production / console
    console.log(`[Waitlist Submission] Product: ${productSlug || 'general'}, Name: ${name || 'N/A'}, Email: ${email}, Time: ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: 'Inscrição confirmada na lista de espera!',
    });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Erro ao processar inscrição na lista de espera.' },
      { status: 500 }
    );
  }
}
