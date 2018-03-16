class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.user = current_user
    @event.attendee_ids = attendee_ids

    if @event.save
      render 'api/events/show'
    else
      render json: {errors: @event.errors.full_messages}, status: 422
    end
  end

  def show
    @event = Event.includes(:attendees, :user).find(params[:id])

    render 'api/events/show'
  end

  def index
    @events = Event.all

    render 'api/events/index'
  end

  def filter_index
    search_start_date = params[:search_start_date].to_date

    @events = Event.where(end_date: search_start_date..search_start_date + 60)

    render 'api/events/index'
  end

  def update
    @event = Event.find(params[:id])
    @event.attendee_ids = attendee_ids

    if @event.update_attributes(event_params)
      render 'api/events/show'
    else
      render json: {errors: @event.errors.full_messages}, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy!
    render 'api/events/show'
  end

  private

  def event_params
    params.require(:event).permit(:title, :start_date, :end_date, :notes)
  end

  def attendee_ids
    ids = (params[:event][:attendees])

    if ids
      ids.map(&:to_i)
    else
      []
    end
  end
end
