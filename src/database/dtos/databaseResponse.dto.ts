import { ApiProperty } from '@nestjs/swagger';

export class DatabaseResponseDto {
  @ApiProperty({
    description:
      'ID único do documento gerado automaticamente pelo banco de dados.',
    example: '507f1f77bcf86cd799439011',
  })
  _id: string;

  @ApiProperty({
    description: 'Data de criação do documento no banco de dados.',
    example: '2023-01-01T12:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data da última atualização do documento no banco de dados.',
    example: '2023-01-02T12:00:00.000Z',
  })
  updatedAt: Date;
}
