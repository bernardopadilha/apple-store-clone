import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray ">
            Este site foi feito por:
            <span className="underline text-blue">
              {' '} Bernardo Alves Padilha {' '}
            </span>
            <br />
            Linkedin:
            <span className="underline text-blue">
              {' '} https://www.linkedin.com/in/bernardo-alves-padilha-8474a3232/ {' '}
            </span>
            <br />
            E-mail:
            <span className="underline text-blue">
              {' '}bernardoa.padilha@gmail.com {' '}
            </span>
          </p>

          <p className="font-semibold text-gray">
            Ou ligue (48) 99158-3678.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Bernardo Padilha Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer