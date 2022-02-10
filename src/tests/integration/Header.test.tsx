import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../../components/Header'

const renderComponent = () => {
    const onConfigChangeMock = jest.fn()
    const startSortMock = jest.fn()
    const stopSortMock = jest.fn()

    return render(
        <Header
            stopSort={stopSortMock}
            startSort={startSortMock}
            onConfigChange={onConfigChangeMock}
        />
    )
}

describe('<Header/>', () => {
    beforeEach(() => {
        renderComponent()
    })

    it('renders the STOP button as initially disabled', () => {
        expect(screen.getByRole('button', { name: /stop/i })).toBeDisabled()
    })

    it('renders the start button as initially non-disabled', () => {
        expect(screen.getByRole('button', { name: /start/i })).not.toBeDisabled()
    })

    it('disables the canvas config selects and enables the stop button', () => {
        userEvent.click(screen.getByRole('button', { name: /start/i }))

        expect(screen.getByRole('combobox', { name: /sorting method/i })).toBeDisabled()
        expect(screen.getByRole('combobox', { name: /columns & rows/i })).toBeDisabled()
        expect(screen.getByRole('button', { name: /stop/i })).not.toBeDisabled()
    })
})
