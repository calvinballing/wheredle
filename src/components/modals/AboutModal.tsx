import { CONFIG } from '../../constants/config'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
      This is an open source word game adapted by{' '}
        <a href={CONFIG.authorWebsite} className="underline font-bold">
          {CONFIG.author}
        </a>{' '}
        - check out inspiring work by{' '}
        <a
          href="https://www.hannahmariepark.com/"
          className="underline font-bold"
        >
          Hannah Park
        </a>{' '}
        or have a look at{' '}
        <a
          href="https://github.com/roedoejet/"
          className="underline font-bold"
        >
          Aidan Pine's similar work
        </a>{' '}
        and make custom word games in other languages! Find more Word games at{' '}
        <a
          href="https://rwmpelstilzchen.gitlab.io/"
          className="underline font-bold"
        >
          rwmpelstilzchen's site
        </a>.{' '}      
        Consider learning about the work{' '}
        <a href='https://www.givewell.org/' className="underline font-bold">
          Givewell
        </a>{' '}
        is doing to identify outstanding charities.
      </p>
    </BaseModal>
  )
}
