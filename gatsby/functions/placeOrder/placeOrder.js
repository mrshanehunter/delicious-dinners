const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
    <h3>Your Delicious Dinner Order for ${total}</h3>
    <h5>Payment Succesful</h5>
    <br />
    <ul>
      ${order
        .map(
          (item) => `<li>
      <img src="${item.thumbnail}" alt="${item.name}"/>
      ${item.name} - ${item.price}
      </li>`
        )
        .join('')}
    </ul>
    <style>
        ul {
          list-style: none;
        }
    </style>    
  </div>`;
}

// create a transport for nodemailer

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_SERVER,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // validate the data coming from customer is correct
  const body = JSON.parse(event.body);
  if (body.banana) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'XXX - XXX - XXX - YYY - YYY - YYY - XXX - XXX - XXX',
      }),
    };
  }
  const requiredFields = ['email', 'name', 'phone', 'order'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Hmmm, you forget to fill in the ${field} field! `,
        }),
      };
    }
  }

  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `There are no meals attached to your order, so this order is cancelled.`,
      }),
    };
  }
  // test send an email
  const info = await transporter.sendMail({
    from: 'Delicious Dinners <delicious@example.com>',
    to: `${body.name} <${body.email}>`,
    subject: 'New Order',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success!',
    }),
  };
};
